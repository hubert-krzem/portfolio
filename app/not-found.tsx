import ErrorPage from "@/components/ErrorPage";

export default function NotFound() {
  return <ErrorPage code={404} message="The page you are looking for does not exist." />;
}
