export default function NotFoundPage() {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center text-center gap-3'>
            <h1 className='lg:text-6xl text-4xl text-muted-foreground'>404</h1>
            <h1 className='lg:text-4xl text-2xl text-muted-foreground'>Sorry, we couldn't find that page!</h1>
            <a className='text-lg text-primary underline-offset-2 hover:underline hover:cursor-pointer' href='/'>{"Back Home >"}</a>
        </div>
    )
}