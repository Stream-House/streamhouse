import { Button } from '@/components/ui/button';
import { Search, XIcon } from "lucide-react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogClose
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";
import * as React from "react";
import { useNavigate } from "react-router-dom";

interface ListItem {
    title: string,
    click: boolean,
    id: string
}

export function SearchButton() {
    const [keyword, setKeyword] = useState('');
    const [list, setList] = useState<ListItem[]>([]);
    const [noneFound, setNoneFound] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const updateList = () => {
        // TODO: Implement search
        console.log(keyword);
        setList([
            {
                title: "Sorry, we couldn't find that movie",
                click: false,
                id: 'notfound'
            }
        ]);
        setNoneFound(true);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
        updateList();
    }

    const handleStateChange = (state: boolean) => {
        setOpen(state);

        if (!state) {
            setTimeout(() => {
                setKeyword('');
                setList([]);
                setNoneFound(false);
            }, 200);
        } // Reset State
    }

    const handleMovieRedirect = (item: ListItem) => {
        if (!item.click)
            return;

        handleStateChange(false);
        navigate(`/movies/${item.id}`)
    }

    // <div className="p-3 rounded-t-sm hover:cursor-pointer hover:bg-foreground/10 transition">Item 1</div>
    // <div className="p-3 hover:cursor-pointer hover:bg-foreground/10 transition">Item 2</div>
    // <div className="p-3 hover:cursor-pointer hover:bg-foreground/10 transition">Item 3</div>
    // <div className="p-3 rounded-b-sm hover:cursor-pointer hover:bg-foreground/10 transition">Item 4</div>

    return (
        <Dialog open={open} onOpenChange={handleStateChange}>
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
                    <Input id='keyword' placeholder='Search for a movie' onChange={handleChange} />
                    <DialogClose asChild>
                        <button
                            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-1/2 -translate-y-1/2 right-3 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5 hover:cursor-pointer"
                        >
                            <XIcon/>
                        </button>
                    </DialogClose>
                </div>
                {keyword != '' && <div className="flex flex-col gap-1">
                    {list.length > 0 && (<>
                        <div className="flex flex-col rounded-sm divide-y border">
                            {list.map((item: ListItem, index) => {
                                const isFirst = index === 0;
                                const isLast = index === list.length - 1;
                                const onlyOne = list.length === 1;

                                const roundingClass = onlyOne ? 'rounded-sm' : isFirst ? 'rounded-t-sm' : isLast ? 'rounded-b-sm' : '';
                                const hoverClass = item.click ? 'hover:cursor-pointer hover:bg-foreground/10' : '';

                                return (
                                    <div
                                        key={index}
                                        className={`p-3 ${hoverClass} transition ${roundingClass}`}
                                        onClick={() => {handleMovieRedirect(item)}}
                                    >
                                        {item.title}
                                    </div>
                                );
                            })}
                        </div>
                        {noneFound && <div className='flex flex-row-reverse pr-2'>
                            <a
                                href={`/movies/search?q=${keyword}`}
                                className="block text-sm text-primary hover:underline mt-2"
                            >
                                {"See all >"}
                            </a>
                        </div>}
                    </>)}
                </div>}
            </DialogContent>
        </Dialog>
    )
}