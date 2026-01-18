"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { type ComponentProps } from "react";

export const LinkWithChannel = ({
	href,
	...props
}: Omit<ComponentProps<typeof Link>, "href"> & { href: string }) => {
	const { channel } = useParams<{ channel?: string }>();

	if (!href.startsWith("/") || href.endsWith(".html")) {
		return <a {...(props as any)} href={href} />;
	}

	const encodedChannel = encodeURIComponent(channel ?? "");
	const hrefWithChannel = `/${encodedChannel}${href}`;
	return <Link {...props} href={hrefWithChannel} />;
};
