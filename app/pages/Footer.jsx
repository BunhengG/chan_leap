"use client";

export default function Footer() {
  return (
    <footer className="bg-white text-foreground py-6 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} SengChanleap. All rights reserved.
      </p>
    </footer>
  );
}
