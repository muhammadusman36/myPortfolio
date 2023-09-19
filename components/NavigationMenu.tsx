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
    
    
    export default function NavigationMenu() {
    
      const [open, setOpen] = React.useState(false)
    
      React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
          if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            setOpen((open) => !open)
          }
        }
    
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
      }, [])
      return (

        <>
        <p className="text-sm flex justify-end items-end me-11">
          <kbd className="inline-flex h-5 select-none items-center dark:text-yellow-300 bg-black text-white gap-1 rounded font-mono text-[10px] font-medium p-5 shadow-xl border-spacing-12 cursor-pointer">
            <span className="text-lg">⌘ J</span>
          </kbd>
        </p>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <span>Launch</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <span>Mail</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>   

      ) 
    }