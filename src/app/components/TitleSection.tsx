type Props = {
    title?: string,
}

export const TitleSection = ({ title }: Props) => {
    return <h3 className="text-gray50 font-semibold text-12">{title}</h3>
}