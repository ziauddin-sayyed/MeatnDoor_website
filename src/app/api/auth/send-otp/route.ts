import { type NextRequest, NextResponse } from "next/server";
import { apiConfig } from "@/config/SaleorApi";

export async function POST(request: NextRequest) {
	try {
		const body = (await request.json()) as { phone?: string };
		const { phone } = body;

		if (!phone || phone.length !== 10) {
			return NextResponse.json({ message: "Please enter a valid 10-digit phone number" }, { status: 400 });
		}

		const response = await fetch(apiConfig.SEND_OTP_ENDPOINT, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ phone }),
		});

		const data = await response.json();

		if (response.ok) {
			return NextResponse.json(data, { status: 200 });
		} else {
			return NextResponse.json(data, { status: response.status });
		}
	} catch (error) {
		console.error("Error sending OTP:", error);
		return NextResponse.json({ message: "Failed to send OTP" }, { status: 500 });
	}
}
