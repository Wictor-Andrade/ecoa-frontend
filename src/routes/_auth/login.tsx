import {LoginForm} from "@/components/login-form.tsx";
import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute("/_auth/login")({
	component: RouteComponent,
});

function RouteComponent() {
	return <LoginForm />;
}
