import { EntryView, entryMeta, servicesParams } from "@/views/Pages";
export const dynamicParams = false;
export const generateStaticParams = servicesParams;
type P = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: P) { return entryMeta("ar", (await params).slug); }
export default async function Page({ params }: P) { return <EntryView lang="ar" slug={(await params).slug} />; }
