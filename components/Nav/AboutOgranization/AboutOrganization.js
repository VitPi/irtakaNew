import s from './style.module.css'

export default function AboutOrganization(props) {
    return (
        <section className={s.inform}>
            <h3 className={s.head}>
                {props.headerH3}
            </h3>
            <p>
                {props.paragraph}
            </p>
        </section>
    )
}








