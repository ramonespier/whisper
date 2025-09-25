import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Logo() {
  return (
    <Avatar className={'size-25 rounded-full'}>
      <AvatarImage src={'/whisper-logos/dark.png'} className={'hidden dark:block'} />
      <AvatarImage src={'/whisper-logos/light.png'} className={'dark:hidden'} />
      <AvatarFallback>Logotipo Whisper</AvatarFallback>
    </Avatar>
  );
}