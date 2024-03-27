import style from './navbar.module.scss'

export const Navbar = () => {


    return <>
        <nav className={style.nav}>
            <a href="https://t-mobile.com" className={style.logo}>
                <svg width="36" height="36" viewBox="0 0 133 158">
                    <path d="M32.3396 104.234H0.893188V72.788H32.3396V104.234Z"  />
                    <path d="M0.893188 0.460027V53.92H10.3271V52.3467C10.3271 27.1893 24.4781 11.4667 51.2079 11.4667H52.7797V124.675C52.7797 140.397 46.4907 146.687 30.7672 146.687H26.0505V157.693H107.812V146.687H103.095C87.3707 146.687 81.0813 140.397 81.0813 124.675V11.4667H82.6547C109.384 11.4667 123.535 27.1893 123.535 52.3467V53.92H132.969V0.460027H0.893188Z"  />
                    <path d="M101.523 104.234H132.968V72.788H101.523V104.234Z"  />
                </svg>
            </a>
        </nav>
        <div className={style.disclaimer}>
            An unofficial resource
        </div>
    </>
}