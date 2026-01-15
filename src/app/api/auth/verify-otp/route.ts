import { type NextRequest, NextResponse } from "next/server";
import { apiConfig } from "@/config/SaleorApi";

export async function POST(request: NextRequest) {
	try {
		const body = (await request.json()) as { phone?: string; code?: string };
		const { phone, code } = body;

		if (!phone || !code || code.length !== 6) {
			return NextResponse.json({ message: "Please enter a valid phone number and 6-digit OTP" }, { status: 400 });
		}

		const response = await fetch(apiConfig.VERIFY_OTP_ENDPOINT, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ phone, code }),
		});

		const data = await response.json();

		if (response.ok) {
			return NextResponse.json(data, { status: 200 });
		} else {
			return NextResponse.json(data, { status: response.status });
		}
	} catch (error) {
		console.error("Error verifying OTP:", error);
		return NextResponse.json({ message: "Failed to verify OTP" }, { status: 500 });
	}
}
