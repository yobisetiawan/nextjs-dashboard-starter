import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
  return (
    <div className=" min-h-[100vh] flex flex-row">
      <div className="lg:max-w-[40%] w-full  min-h-[100vh] flex flex-col items-center justify-center">
        <div className="w-full ">
          <div className="max-w-[460px] mx-auto px-8 ">
            <h1 className="text-4xl font-bold mb-8">Sign in</h1>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="picture">Email</Label>
                <Input placeholder="me@example.com" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input placeholder="password" type="password" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Checkbox id="remember" /> 
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Button variant="default" className="w-full">
                Sign In
              </Button>

              <div className="text-sm text-muted-foreground text-center ">
                By logging in you accept our <Link href="/auth/legal-terms" className="text-blue-500">Legal Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden  bg-blue-400 flex-1 lg:flex flex-col justify-center items-center text-white">
        <div className="text-center space-y-4 max-w-[600px]">
          <h4 className="text-4xl font-bold leading-12">
            Simple, yet powerful Web Application
          </h4>
          <div className="text-lg font-bold">
            Combined to understand your users
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
