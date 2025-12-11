"use server";

import { getServerAuthClient } from "@/app/config";


import { revalidatePath } from "next/cache";
import { CheckoutAddLineDocument, CheckoutDeleteLinesDocument, CheckoutLineUpdateDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import * as Checkout from "@/lib/checkout";
import { invariant } from "ts-invariant";

export async function logout() {
	"use server";
	(await getServerAuthClient()).signOut();
}

export async function removeFromCart(lineId: string, channel: string) {
	"use server";
	const checkoutId = await Checkout.getIdFromCookies(channel);
	invariant(checkoutId, "Checkout ID missing");

	await executeGraphQL(CheckoutDeleteLinesDocument, {
		variables: {
			checkoutId,
			lineIds: [lineId],
		},
		cache: "no-cache",
	});

	revalidatePath("/cart");
	revalidatePath("/");
}

export async function updateCartItem(lineId: string, variantId: string, quantity: number, channel: string) {
	"use server";
	const checkoutId = await Checkout.getIdFromCookies(channel);
	invariant(checkoutId, "Checkout ID missing");

	if (quantity === 0) {
		await removeFromCart(lineId, channel);
		return;
	}

	try {
		await executeGraphQL(CheckoutLineUpdateDocument, {
			variables: {
				id: checkoutId,
				lines: [
					{
						variantId,
						quantity,
					},
				],
			},
			cache: "no-cache",
		});
	} catch (e) {
		console.error("CheckoutLineUpdate failed", e);
		throw e;
	}

	revalidatePath("/cart");
	revalidatePath("/");
}

export async function addToCart(variantId: string, channel: string) {
	"use server";
	const checkout = await Checkout.findOrCreate({
		checkoutId: await Checkout.getIdFromCookies(channel),
		channel,
	});
	invariant(checkout, "This should never happen");

	await Checkout.saveIdToCookie(channel, checkout.id);

	await executeGraphQL(CheckoutAddLineDocument, {
		variables: {
			id: checkout.id,
			productVariantId: variantId,
		},
		cache: "no-cache",
	});

	revalidatePath("/cart");
	revalidatePath("/");
}

