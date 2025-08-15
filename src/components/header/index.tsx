import logo from '@/assets/logo.svg'
import { Input } from '@/components/ui/input'
import { Bell, Search, User } from 'lucide-react'

export const Header = () => {
    return (
        <header className='px-4 py-5 flex items-center justify-between shadow z40 relative'>
            <div className='flex items-center gap-6'>
                <img src={logo} alt="" />
                <div className='relative'>
                    <Input className='w-[250px] px-3 py-2.5' />
                    <Search className='absolute size-4 top-3 right-3' />
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <Bell size={16} />
                <div className='w-[36px] h-[36px] rounded-full bg-teal-50 flex items-center justify-center'>
                    <User size={16} />
                </div>
            </div>
        </header>
    )
}