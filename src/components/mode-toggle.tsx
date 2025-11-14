import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useState } from "react";

export function ModeToggle() {
    const { setTheme } = useTheme()
    const [state, setState] = useState("dark");

    const handleClick = () => {
        if (state == 'dark') {
            setTheme('light');
            setState('light');
        } else if (state === 'light') {
            setTheme('dark');
            setState('dark');
        } else {
            setTheme('system');
            setState('dark');
        }
    }

    return (
        <Button variant='outline' size='icon' onClick={handleClick} className='rounded-full hover:cursor-pointer hover:text-primary transition-all duration-250'>
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}