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
import { Button } from "./ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NavigationMenu() {
      const router = useRouter()
    
      const [open, setOpen] = React.useState(false)
    
      React.useEffect(() => {
        
        const down = (e: KeyboardEvent) => {
          if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            setOpen((open) => !open)
          }
        }
        



        document.addEventListener("keydown", down)
        return () =>
        {

          document.removeEventListener("keydown", down)
        }
      }, [])

      const shortCuts = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(open){
          if (e.key === "h" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            router.push('/')
            setOpen((open) => !open)
          }
          else if (e.key === "a" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            console.log('about')
            router.push('/about')
            setOpen((open) => !open)
          }
          else if (e.key === "b" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            router.push('/blog')
            setOpen((open) => !open)
          }
          else if (e.key === "t" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            router.push('/tech')
            setOpen((open) => !open)
          }
          
        }
      }

      return (

        <>
        {/* <Button className="text-sm flex justify-end items-end me-11 fixed right-5 " onClick={()=>{setOpen(!open)}}> */}
          <kbd className="inline-flex h-5 select-none items-center gap-1 rounded-lg font-mono text-[10px] font-medium p-5 shadow-xl border-spacing-12 cursor-pointer fixed right-12 bottom-8 bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition-all duration-300" onClick={()=>{setOpen(!open)}}>
            <span className="text-lg">⌘+J</span>
          </kbd>
        {/* </Button> */}
        <CommandDialog open={open} onOpenChange={setOpen} data-theme={'dark'}>
          <CommandInput placeholder="Type a command or search..." onKeyDown={shortCuts} />
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
                <span>Mail</span>
                <CommandShortcut className=" bg-gray-400 text-white shadow-lg px-1 rounded">⌘B</CommandShortcut>
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