import { ProductsIndex, productsMeta } from "@/views/Pages";
export const metadata = productsMeta("en");
export default function Page() { return <ProductsIndex lang="en" />; }
