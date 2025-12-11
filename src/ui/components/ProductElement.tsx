"use client";

import { useTransition } from "react";
import { useParams } from "next/navigation";
import { addToCart, updateCartItem } from "@/app/actions";
import { ClipLoader } from "react-spinners";

import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";

import type { ProductListItemFragment } from "@/gql/graphql";
import { formatMoneyRange } from "@/lib/utils";

export function ProductElement({
	product,
	loading,
	priority,
	cartItem,
}: { product: ProductListItemFragment } & {
	loading: "eager" | "lazy";
	priority?: boolean;
	cartItem?: { lineId: string; quantity: number };
}) {
	const params = useParams<{ channel: string }>();
	const [isPending, startTransition] = useTransition();

	const handleAddToCart = async (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (!product.variants?.[0]?.id) return;
		startTransition(async () => {
			await addToCart(product.variants![0].id, params.channel);
		});
	};

	const handleIncrease = async (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (!cartItem || !product.variants?.[0]?.id) return;
		startTransition(async () => {
			await updateCartItem(
				cartItem.lineId,
				product.variants![0].id,
				cartItem.quantity + 1,
				params.channel,
			);
		});
	};

	const handleDecrease = async (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (!cartItem || !product.variants?.[0]?.id) return;
		startTransition(async () => {
			await updateCartItem(
				cartItem.lineId,
				product.variants![0].id,
				cartItem.quantity - 1,
				params.channel,
			);
		});
	};

	return (
		<li data-testid="ProductElement" className="rounded border-2 border-[#47141e]  ">
			<LinkWithChannel href={`/products/${product.slug}`} key={product.id}>
				<div>
					{product?.thumbnail?.url && (
						<ProductImageWrapper
							loading={loading}
							src={product.thumbnail.url}
							alt={product.thumbnail.alt ?? ""}
							width={150}
							height={150}
							sizes={"150px"}
							priority={priority}
						/>
					)}
				</div>
			</LinkWithChannel>
			<div className="mt-2 flex h-20 justify-between border-t-2 border-[#ed4264] px-4 py-2">
				<div className="w-[60%]">
					<h3 className="mt-1 text-sm font-semibold text-neutral-900">{product.name}</h3>
					<p className="mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">
						{product.category?.name}
					</p>
				</div>
				<div className="w-[40%] text-right">
					<p className="mt-1 text-sm font-medium text-neutral-900" data-testid="ProductElement_PriceRange">
						{formatMoneyRange({
							start: product?.pricing?.priceRange?.start?.gross,
							stop: product?.pricing?.priceRange?.stop?.gross,
						})}
					</p>
					<div className="mt-2 flex justify-end">
						{cartItem ? (
							<div className="flex items-center gap-2">
								<button
									onClick={handleDecrease}
									disabled={isPending}
									className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200 hover:bg-neutral-300 disabled:opacity-50"
								>
									-
								</button>
								<span className="w-4 text-center text-sm font-medium">
									{isPending ? <ClipLoader size={12} /> : cartItem.quantity}
								</span>
								<button
									onClick={handleIncrease}
									disabled={isPending}
									className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200 hover:bg-neutral-300 disabled:opacity-50"
								>
									+
								</button>
							</div>
						) : (
							<button
								onClick={handleAddToCart}
								disabled={isPending}
								className="text-sm font-medium text-blue-600 hover:text-blue-800 disabled:opacity-50"
							>
								{isPending ? <ClipLoader size={12} /> : "Add to cart"}
							</button>
						)}
					</div>
				</div>
			</div>
			{/* </div> */}
			{/* </LinkWithChannel> */}
		</li>
	);
}
