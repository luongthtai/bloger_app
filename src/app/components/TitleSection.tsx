type Props = {
    title?: string,
}

export const TitleSection = ({ title }: Props) => {
    return <h3 className="text-gray50 font-bold text-12">{title}</h3>
}

export const TitleSectionMedium = ({ title }: Props) => {
    return <h3 className="font-bold text-12 text-black10">{title}</h3>
}

export const TitleSectionLarge = ({ title }: Props) => {
    return <h3 className="font-bold text-black10 text-3xl">{title}</h3>
}