"use client"

import * as React from "react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NavigationMenu() {
  const router = useRouter()

  const [open, setOpen] = React.useState(false)
  const [openBox, setOpenBox] = React.useState(false)

  const navigate = (route: string) => {
    router.push(route);
  };
  React.useEffect(() => {
    const toggleDialogAndNavigate = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      console.log("useEffecht E" + e.key);

      if (!open) {
        if ((e.key === "j" || e.key === "J") && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setOpen((prevOpen) => !prevOpen);
        } else if ((key === 'h') && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          navigate("/");
        } else if ((key === 'p') && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          navigate("/projects");
        } else if ((key === 'a') && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          navigate("/about");
        } else if ((key === 'b') && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          navigate("/blog");
        } else if ((key === 't') && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          navigate("/tech");
        }
      } else {
        if ((key === 'h') && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          navigate("/");
        } else if ((key === 'p') && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          navigate("/projects");
        } else if ((key === 'a') && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          navigate("/about");
        } else if ((key === 'b') && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          navigate("/blog");
        } else if ((key === 't') && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          navigate("/tech");
        }
      }
    };

    document.addEventListener("keydown", toggleDialogAndNavigate);


    return () => {
      document.removeEventListener("keydown", toggleDialogAndNavigate);
    };
  }, [router]);

  // const shortCuts = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   console.log("shortChuts E" + e.key);
  //   const key = e.key.toLowerCase()
  //   if ((key === 'h') && (e.metaKey || e.ctrlKey)) {
  //     e.preventDefault();
  //     setOpen((prevOpen) => !prevOpen);
  //     navigate("/");
  //   } else if ((key === 'a') && (e.metaKey || e.ctrlKey)) {
  //     e.preventDefault();
  //     setOpen((prevOpen) => !prevOpen);
  //     navigate("/about");
  //   } else if ((key === 'b') && (e.metaKey || e.ctrlKey)) {
  //     e.preventDefault();
  //     setOpen((prevOpen) => !prevOpen);
  //     navigate("/blog");
  //   } else if ((key === 't') && (e.metaKey || e.ctrlKey)) {
  //     e.preventDefault();
  //     setOpen((prevOpen) => !prevOpen);
  //     navigate("/tech");
  //   }

  //   setOpen((open) => !open);
  // }



  return (

    <>
      {/* <Button className="text-sm flex justify-end items-end me-11 fixed right-5 " onClick={()=>{setOpen(!open)}}> */}
      <kbd className="inline-flex h-5 select-none items-center gap-1 rounded-lg font-mono text-[10px] font-medium p-5 shadow-xl border-spacing-12 cursor-pointer fixed  right-4 md:right-12 bottom-14 md:bottom-8 bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition-all duration-300" onClick={() => { setOpen(!open) }}>
        <span className="text-lg">⌘+J</span>
      </kbd>
      {/* </Button> */}
      <CommandDialog open={open} onOpenChange={setOpen} data-theme={'dark'}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList >
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="pages">
            <CommandItem>
              <Link href={'/'}>Home</Link>
              <CommandShortcut className=" bg-gray-400 text-white shadow-lg px-1 rounded">⌘H</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Link href={'/about'}>About</Link>
              <CommandShortcut className=" bg-gray-400 text-white shadow-lg px-1 rounded">⌘A</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Link href={'/blog'}>Blog</Link>
              <CommandShortcut className=" bg-gray-400 text-white shadow-lg px-1 rounded">⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Link href={'/tech'}>tech</Link>
              <CommandShortcut className=" bg-gray-400 text-white shadow-lg px-1 rounded">⌘T</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <span>Profile</span>
              <CommandShortcut className=" bg-gray-400 text-white shadow-lg px-1 rounded">⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span>Contact</span>
              <CommandShortcut className=" bg-gray-400 text-white shadow-lg px-1 rounded">⌘C</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span>Settings</span>
              <CommandShortcut className=" bg-gray-400 text-white shadow-lg px-1 rounded">⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>

  )
}