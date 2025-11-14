import { Link } from 'react-router-dom';
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar";
import {CircleUserRound} from 'lucide-react';
import { ModeToggle } from "@/components/mode-toggle";
import { SearchButton } from "@/components/search-button";

function Navbar() {
    return (
        <div className='nav-container w-full flex justify-center px-2'>
            <nav className='w-full py-2 px-4 flex flex-row justify-between items-center border-b'>
                <div className=''>
                    <Link className='text-2xl text-primary' to='/'>Stream<span className='text-secondary'>House</span></Link>
                </div>
                <div className='nav-left flex flex-row-reverse justify-between gap-2'>
                    <Avatar className='hover:cursor-pointer size-9'>
                        <AvatarImage src='https://example.com' className='size-9'/>
                        <AvatarFallback className='size-9'><CircleUserRound
                            className='hover:text-primary transition-all duration-250'/></AvatarFallback>
                    </Avatar>
                    <div className="border-l border-muted-foreground mx-2"></div>
                    <div className='flex flex-row-reverse justify-center gap-2'>
                        <ModeToggle/>
                        <SearchButton/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar