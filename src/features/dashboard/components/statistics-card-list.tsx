/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'
import { SingleStatisicCard } from './single-statistics-card'

const stats = [
  { id: 1, title: 'Total Business Hub', value: '71,897', icon: UsersIcon, link: '122', changeType: 'increase' },
  { id: 2, title: 'Total Users', value: '58,968', icon: EnvelopeOpenIcon, link: '5.4%', changeType: 'increase' },
  { id: 3, title: 'Total Region', value: '24,123', icon: CursorArrowRaysIcon, link: '3.2%', changeType: 'decrease' },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export function StatisticsCardList() {
  return (
    <div>
      <h3 className="text-base font-semibold text-gray-900">Last 30 days</h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item: any, index: number) => (
          <>
            <SingleStatisicCard data={item} key={index} />
          </>
        ))}
      </dl>
      {/* <div
        key={item.id}
        className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow-sm sm:px-6 sm:pt-6"
      >
        <dt>
          <div className="absolute rounded-md bg-indigo-500 p-3">
            <item.icon aria-hidden="true" className="size-6 text-white" />
          </div>
          <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
        </dt>
        <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
          <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
          <p
            className={classNames(
              item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
              'ml-2 flex items-baseline text-sm font-semibold',
            )}
          >
            {item.changeType === 'increase' ? (
              <ArrowUpIcon aria-hidden="true" className="size-5 shrink-0 self-center text-green-500" />
            ) : (
              <ArrowDownIcon aria-hidden="true" className="size-5 shrink-0 self-center text-red-500" />
            )}

            <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
            {item.change}
          </p>
          <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                View all<span className="sr-only"> {item.name} stats</span>
              </a>
            </div>
          </div>
        </dd>
      </div> */}
    </div>
  )
}