export default function Logo() {
    return (
        <div className={'size-40'}>
            <img alt="logotipo-whisper" src={'/whisper-logos/whisper.svg'} className={'dark:hidden rounded-full'} />
            <img alt="logotipo-whisper" src={'/whisper-logos/whisper-claro.svg'} className={'hidden dark:block rounded-full'} />
        </div>
    );
}