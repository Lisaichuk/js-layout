import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

//===================================================

const main = () => createElement('main', 'main')

const TAB_LIST = [
  { text: 'База знань', isActive: false },
  { text: 'Інформація', isActive: true },
]

const createTabs = () => {
  const tabs = createElement('section', 'tabs')

  TAB_LIST.forEach((elem) => {
    const tab = createElement(
      'button',
      elem.isActive
        ? 'tabs__button tabs__button--active'
        : 'tabs__button',
      elem.text,
    )
    tabs.append(tab)
  })
  return tabs
}

const tabs = createTabs()

main.append(tabs)

//===================================================

const community = createElement('section', 'community')

const COMMUNITY_IMAGE = {
  with: 343,
  height: 160,
  src: '/img/community.png',
}

const community__image = () => {
  const img = createElement('img')

  Object.entries(COMMUNITY_IMAGE).forEach(
    ([key, value]) => {
      img[key] = value
    },
  )
  return img
}

const image = community__image()

community.append(image)

//===================================================

const community__title = createElement(
  'h2',
  'community__title',
  'Що таке база знань?',
)

community.append(community__title)

//===================================================

const community__info = createElement(
  'p',
  'community__info',
  `База знаний — база данных, содержащая правила вывода и информацию о человеческом
  		опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит
 		информацию, являющуюся результатом решения предыдущих задач.`,
)

community.append(community__info)

//===================================================

const community_button = createElement(
  'button',
  'button community__button',
  `Перейти до ком'юніті у Телеграм`,
)

community.append(community_button)

//===================================================

main.append(community)

page.append(main)
