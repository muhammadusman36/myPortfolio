import Background from '@/components/Background'
import ThemeSwitch from '@/lib/ThemeSwitcher'

export default function Home() {
  return (
    <>
    <Background />
    <ThemeSwitch/>
    <span className='dark:text-yellow-300'>elo</span>
    </>
  )
}
