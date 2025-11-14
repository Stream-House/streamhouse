import { Button } from '@/components/ui/button';
import { Search, XIcon } from "lucide-react";
import {
    Dialog,
    DialogTrigger,
    DialogContent, DialogTitle, DialogDescription
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";

export function SearchButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='ghost' size='icon' className='rounded-full hover:cursor-pointer hover:text-primary transition-all duration-250'>
                    <Search/>
                </Button>
            </DialogTrigger>
            <DialogContent showCloseButton={false}>
                <VisuallyHidden>
                    <DialogTitle>Search Movie</DialogTitle>
                    <DialogDescription>Input a movie name to search for it</DialogDescription>
                </VisuallyHidden>
                <div className='relative'>
                    <Input id='keyword' placeholder='Search for a movie' />
                    <button className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-1/2 -translate-y-1/2 right-3 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5">
                        <XIcon/>
                    </button>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col rounded-sm divide-y border">
                        <div className="p-3 rounded-t-sm hover:cursor-pointer hover:bg-foreground/10 transition">Item 1</div>
                        <div className="p-3 hover:cursor-pointer hover:bg-foreground/10 transition">Item 2</div>
                        <div className="p-3 hover:cursor-pointer hover:bg-foreground/10 transition">Item 3</div>
                        <div className="p-3 rounded-b-sm hover:cursor-pointer hover:bg-foreground/10 transition">Item 4</div>
                    </div>
                    <div className='flex flex-row-reverse pr-2'>
                        <a
                            href="/search?q="
                            className="block text-sm text-primary hover:underline mt-2"
                        >
                            {"See all >"}
                        </a>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}