"use client";

export default function ContactPage() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
			{/* Hero Section */}
			<section className="relative overflow-hidden border-b border-[#ed4264]/10 bg-gradient-to-br from-[#47141e] via-[#5a1a28] to-[#47141e] pb-16 pt-20 text-center">
				{/* Decorative gradient orbs */}
				<div className="absolute -right-20 -top-20 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-[#ed4264]/20 to-[#ff6b9d]/20 blur-3xl"></div>
				<div className="absolute -bottom-20 -left-20 h-96 w-96 animate-pulse rounded-full bg-gradient-to-tr from-[#47141e]/20 to-[#ed4264]/20 blur-3xl" style={{ animationDelay: '1s' }}></div>
				
				<div className="relative mx-auto max-w-4xl px-4">
					<h1 className="mb-6 text-5xl font-extrabold text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
						Get in Touch
					</h1>
					<div className="mx-auto mb-6 h-1.5 w-32 rounded-full bg-gradient-to-r from-[#ed4264] via-[#ff6b9d] to-[#ed4264] shadow-lg"></div>
					<p className="text-lg text-white/90 sm:text-xl">
						{`We'd love to hear from you! Whether you have a question about your order, feedback about our app,
						or need help with our services — we're here to help.`}
					</p>
				</div>
			</section>

			{/* Contact Content */}
			<section className="relative -mt-8 py-12">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					{/* Cards Grid */}
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{/* Email */}
						<div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
							<div className="absolute inset-0 bg-gradient-to-br from-[#ed4264]/5 via-transparent to-[#ff6b9d]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
							<div className="relative">
								<div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#ed4264]/10 to-[#ff6b9d]/10 p-4 text-4xl transition-transform duration-300 group-hover:scale-110">
									📧
								</div>
								<h3 className="mb-3 text-2xl font-bold text-[#47141e]">Email Us</h3>
								<p className="mb-4 text-neutral-600">For general support or inquiries:</p>
								<a
									href="mailto:support@meatndoor.com"
									className="group/link inline-flex items-center gap-2 font-semibold text-[#ed4264] transition-all duration-300 hover:gap-3 hover:text-[#47141e]"
								>
									support@meatndoor.com
									<span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
								</a>
							</div>
						</div>

						{/* Call */}
						<div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
							<div className="absolute inset-0 bg-gradient-to-br from-[#ed4264]/5 via-transparent to-[#ff6b9d]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
							<div className="relative">
								<div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#ed4264]/10 to-[#ff6b9d]/10 p-4 text-4xl transition-transform duration-300 group-hover:scale-110">
									📞
								</div>
								<h3 className="mb-3 text-2xl font-bold text-[#47141e]">Call Us</h3>
								<p className="mb-4 text-neutral-600">Monday to Saturday, 9 AM to 6 PM:</p>
								<a
									href="tel:+919152941410"
									className="group/link inline-flex items-center gap-2 font-semibold text-[#ed4264] transition-all duration-300 hover:gap-3 hover:text-[#47141e]"
								>
									+91 91529 41410
									<span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
								</a>
							</div>
						</div>

						{/* WhatsApp */}
						<div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
							<div className="absolute inset-0 bg-gradient-to-br from-[#ed4264]/5 via-transparent to-[#ff6b9d]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
							<div className="relative">
								<div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#ed4264]/10 to-[#ff6b9d]/10 p-4 text-4xl transition-transform duration-300 group-hover:scale-110">
									💬
								</div>
								<h3 className="mb-3 text-2xl font-bold text-[#47141e]">WhatsApp</h3>
								<p className="mb-4 text-neutral-600">For quick assistance and chat support</p>
								<a
									href="https://wa.me/919152941410"
									target="_blank"
									rel="noopener noreferrer"
									className="group/link inline-flex items-center gap-2 font-semibold text-[#ed4264] transition-all duration-300 hover:gap-3 hover:text-[#47141e]"
								>
									Chat with us
									<span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
								</a>
							</div>
						</div>

						{/* Website */}
						<div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
							<div className="absolute inset-0 bg-gradient-to-br from-[#ed4264]/5 via-transparent to-[#ff6b9d]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
							<div className="relative">
								<div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#ed4264]/10 to-[#ff6b9d]/10 p-4 text-4xl transition-transform duration-300 group-hover:scale-110">
									🌐
								</div>
								<h3 className="mb-3 text-2xl font-bold text-[#47141e]">Visit Us</h3>
								<p className="mb-4 text-neutral-600">Explore our website for more information</p>
								<a
									href="https://meatndoor.com"
									target="_blank"
									rel="noopener noreferrer"
									className="group/link inline-flex items-center gap-2 font-semibold text-[#ed4264] transition-all duration-300 hover:gap-3 hover:text-[#47141e]"
								>
									meatndoor.com
									<span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
								</a>
							</div>
						</div>

						{/* Location */}
						<div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:col-span-2 lg:col-span-1">
							<div className="absolute inset-0 bg-gradient-to-br from-[#ed4264]/5 via-transparent to-[#ff6b9d]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
							<div className="relative">
								<div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#ed4264]/10 to-[#ff6b9d]/10 p-4 text-4xl transition-transform duration-300 group-hover:scale-110">
									📍
								</div>
								<h3 className="mb-3 text-2xl font-bold text-[#47141e]">Our Location</h3>
								<p className="mb-4 text-neutral-600">
									301, A-WING, TARUN BHARAT BUILDING, GOLIBAR ROAD, 7TH ROAD SANTACRUZ EAST, MUMBAI - 400055
								</p>
								<a
									href="https://maps.google.com"
									target="_blank"
									rel="noopener noreferrer"
									className="group/link inline-flex items-center gap-2 font-semibold text-[#ed4264] transition-all duration-300 hover:gap-3 hover:text-[#47141e]"
								>
									Get directions
									<span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
								</a>
							</div>
						</div>
					</div>

					{/* Bottom Text */}
					<div className="mt-16 rounded-2xl border border-neutral-200 bg-gradient-to-br from-white via-gray-50 to-white p-8 text-center shadow-lg">
						<p className="mb-2 text-lg text-neutral-600">
							We typically respond to inquiries within 24 hours on business days.
						</p>
						<p className="text-xl">
							Thank you for choosing{" "}
							<strong className="bg-gradient-to-r from-[#ed4264] to-[#ff6b9d] bg-clip-text text-transparent">
								MEATnDOOR
							</strong>
							!
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
