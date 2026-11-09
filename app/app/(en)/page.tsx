import { Home } from "@/components/Site";
import { meta } from "@/lib/meta";

export const metadata = meta("en");
export default function Page() {
  return <Home lang="en" />;
}
