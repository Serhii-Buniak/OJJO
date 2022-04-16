import UsefulArticles from "."
import clocksArticle from "images/main/useful-articles/clocks-choice.png"
import cufflinksArticle from "images/main/useful-articles/cufflinks-choice.png"
import ringsArticle from "images/main/useful-articles/rings-choice.png"

const UsefulArticlesContainer: React.FC = () => {
    return (
        <UsefulArticles
            buttonTitle="Читать наш блог"
            items={[
                {
                    title: 'Как выбрать часы для своей будущей жены',
                    link: '#',
                    image: clocksArticle
                },
                {
                    title: 'Запонки для мужа: 7 ключевых правил покупки аксессуара',
                    link: '#',
                    image: cufflinksArticle
                },
                {
                    title: 'Как выбрать обручальные кольца молодоженам',
                    link: '#',
                    image: ringsArticle
                },
            ]} />
    )
}

export default UsefulArticlesContainer