/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog"

import { FcGoogle } from "react-icons/fc";

const DialogBtn = ({ open, login }) => {
  return (
      <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <img src="/logo.svg" alt="" />
            <h2 className="mt-5 text-2xl font-bold text-gray-800">Sign In with Google</h2>
            <p className="text-gray-700">Use your Google account to quickly and securely sign in to your account.</p>
            <Button
            onClick={login}
             className="mt-5 w-full flex items-center gap-2"><FcGoogle className="h-5 w-5" />Sign In with Google</Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
  
export default DialogBtn;