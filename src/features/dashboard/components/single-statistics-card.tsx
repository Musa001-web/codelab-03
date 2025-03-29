
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface SingleStatisicCardProp{
    data: any
}

export function SingleStatisicCard({data}: SingleStatisicCardProp){
  return (
    <Card>
      <CardHeader>
        <CardDescription className='text-lg'>{data.title}</CardDescription>
        <CardTitle className='font-bold text-3xl'>{data.value}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            View all<span className="sr-only"> {data.name} stats</span>
          </a>
        </div>
      </CardContent>
    </Card>
  )
}