"use client";

export default function Footer() {
  return (
    <footer className="bg-black/10 text-foreground py-6 text-center">
      <p className="text-sm text-white font-bold">
        &copy; {new Date().getFullYear()} SengChanleap. All rights reserved.
      </p>
    </footer>
  );
}
