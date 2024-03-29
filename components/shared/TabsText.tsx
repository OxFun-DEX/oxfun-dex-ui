import { useTranslation } from 'react-i18next'

const TabsText = ({
  tabs,
  activeTab,
  onChange,
  className,
}: {
  tabs: [string, number][]
  activeTab: string
  onChange: (tab: string) => void
  className?: string
}) => {
  const { t } = useTranslation(['common', 'trade'])
  return (
    <div className="flex space-x-6 text-base">
      {tabs.map((tab) => (
        <button
          className={`flex items-center space-x-2 font-bold focus:outline-none ${
            activeTab === tab[0] ? 'text-th-active' : ''
          } ${className}`}
          onClick={() => onChange(tab[0])}
          key={tab[0]}
        >
          <span>{t(tab[0])}</span>
          {tab[1] ? (
            <div className="rounded-md bg-th-bkg-3 px-1.5 py-0.5 font-body text-xs font-medium text-th-fgd-2">
              <span>{tab[1]}</span>
            </div>
          ) : null}
        </button>
      ))}
    </div>
  )
}

export default TabsText
