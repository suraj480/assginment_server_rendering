//SSR
export const dynamic = "force-dynamic";
import { getDashboardData } from "../lib/getDashboardData";
import DashboardContent from "../components/DashboardContent";
export default async function DashboardPage() {
  const userData = await getDashboardData();
  return <DashboardContent data={userData} />;
}
