"use client";

import { useTransition } from "react";
import { ClipLoader } from "react-spinners";
import { addToCart, updateCartItem } from "@/app/actions";

export function AddButton({
	disabled,
	channel,
	variantId,
	cartItem,
}: {
	disabled?: boolean;
	channel: string;
	variantId?: string;
	cartItem?: { lineId: string; quantity: number };
}) {
	const [isPending, startTransition] = useTransition();

	const handleAddToCart = async (e: React.MouseEvent) => {
		e.preventDefault();
		if (!variantId) return;
		startTransition(async () => {
			await addToCart(variantId, channel);
		});
	};

	const handleIncrease = async (e: React.MouseEvent) => {
		e.preventDefault();
		if (!cartItem || !variantId) return;
		startTransition(async () => {
			await updateCartItem(cartItem.lineId, variantId, cartItem.quantity + 1, channel);
		});
	};

	const handleDecrease = async (e: React.MouseEvent) => {
		e.preventDefault();
		if (!cartItem || !variantId) return;
		startTransition(async () => {
			await updateCartItem(cartItem.lineId, variantId, cartItem.quantity - 1, channel);
		});
	};

	const isButtonDisabled = disabled || isPending;

	if (cartItem) {
		return (
			<div className="flex items-center gap-4">
				<button
					onClick={handleDecrease}
					disabled={isPending}
					className="flex h-12 w-12 items-center justify-center rounded-md bg-[#ed4264] text-xl font-medium text-white shadow hover:bg-[#47141e] disabled:cursor-not-allowed disabled:opacity-70"
				>
					-
				</button>
				<span className="flex h-12 min-w-[3rem] items-center justify-center text-lg font-medium">
					{isPending ? <ClipLoader size={20} /> : cartItem.quantity}
				</span>
				<button
					onClick={handleIncrease}
					disabled={isPending}
					className="flex h-12 w-12 items-center justify-center rounded-md bg-[#ed4264] text-xl font-medium text-white shadow hover:bg-[#47141e] disabled:cursor-not-allowed disabled:opacity-70"
				>
					+
				</button>
			</div>
		);
	}

	return (
		<button
			type="submit"
			aria-disabled={isButtonDisabled}
			aria-busy={isPending}
			onClick={handleAddToCart}
			className="h-12 w-full items-center rounded-md bg-[#ed4264] px-6 py-3 text-base font-medium leading-6 text-white shadow hover:bg-[#47141e] disabled:cursor-not-allowed disabled:opacity-70 hover:disabled:bg-neutral-700 aria-disabled:cursor-not-allowed aria-disabled:opacity-70 hover:aria-disabled:bg-neutral-700"
		>
			{isPending ? (
				<div className="inline-flex items-center">
					<ClipLoader size={20} color="#ffffff" />
					<span className="ml-2">Processing...</span>
				</div>
			) : (
				<span>Add to cart</span>
			)}
		</button>
	);
}
