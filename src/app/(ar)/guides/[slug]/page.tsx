import { GuideView, guideMeta, guidesParams } from "@/views/Pages";
export const dynamicParams = false;
export const generateStaticParams = guidesParams;
type P = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: P) { return guideMeta("ar", (await params).slug); }
export default async function Page({ params }: P) { return <GuideView lang="ar" slug={(await params).slug} />; }
