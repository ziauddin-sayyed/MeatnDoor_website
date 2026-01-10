import { clsx } from "clsx";
import { redirect } from "next/navigation";
import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { type VariantDetailsFragment } from "@/gql/graphql";
import { getHrefForVariant } from "@/lib/utils";

type ProductWithSlug = {
	slug: string;
};

export function VariantSelector({
	variants,
	product,
	selectedVariant,
	channel,
}: {
	variants: readonly VariantDetailsFragment[];
	product: ProductWithSlug;
	selectedVariant?: VariantDetailsFragment;
	channel: string;
}) {
	if (!selectedVariant && variants.length === 1 && variants[0]?.quantityAvailable) {
		redirect("/" + channel + getHrefForVariant({ productSlug: product.slug, variantId: variants[0].id }));
	}

	return (
		variants.length > 1 && (
			<fieldset className="my-4" role="radiogroup" data-testid="VariantSelector">
				<legend className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#47141e]">Select Variant</legend>
				<div className="flex flex-wrap gap-3">
					{variants.map((variant) => {
						const isDisabled = !variant.quantityAvailable;
						const isCurrentVariant = selectedVariant?.id === variant.id;
						return (
							<LinkWithChannel
								key={variant.id}
								prefetch={true}
								scroll={false}
								href={
									isDisabled ? "#" : getHrefForVariant({ productSlug: product.slug, variantId: variant.id })
								}
								className={clsx(
									"group relative flex min-w-[5ch] items-center justify-center overflow-hidden rounded-xl border-2 px-6 py-3 text-center text-sm font-bold transition-all duration-300",
									isCurrentVariant
										? "border-[#ed4264] bg-gradient-to-br from-[#ed4264] to-[#ff6b9d] text-white shadow-lg shadow-[#ed4264]/30 scale-105"
										: "border-neutral-200 bg-white text-neutral-700 hover:border-[#ed4264]/50 hover:bg-gradient-to-br hover:from-[#ed4264]/5 hover:to-[#ff6b9d]/5 hover:shadow-md",
									"focus-within:outline focus-within:outline-2 focus-within:outline-[#ed4264] focus-within:outline-offset-2",
									"aria-disabled:cursor-not-allowed aria-disabled:bg-neutral-100 aria-disabled:text-neutral-400 aria-disabled:border-neutral-200",
									isDisabled && "pointer-events-none opacity-50",
								)}
								role="radio"
								tabIndex={isDisabled ? -1 : undefined}
								aria-checked={isCurrentVariant}
								aria-disabled={isDisabled}
							>
								{/* Selected indicator */}
								{isCurrentVariant && (
									<div className="absolute right-1 top-1">
										<svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
										</svg>
									</div>
								)}
								<span className="relative z-10">{variant.name}</span>
							</LinkWithChannel>
						);
					})}
				</div>
			</fieldset>
		)
	);
}
