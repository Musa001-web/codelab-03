// import { ViewIconButton } from '@/components/icon-button';
// import { ViewDrawer } from '@/components/view-drawer';
import { GetBusinessHubResponse } from '../schema';
import { CardList } from '@/components/card-list';


interface BusinessHubViewDrawerProps {
  businessHub: GetBusinessHubResponse;
}
export function BusinessHubViewDetils({
  businessHub,
}: BusinessHubViewDrawerProps) {
  const businessHubs = [
    {
      header: 'Business Unit Name',
      body: businessHub?.businessUnitName ?? "N/A",
    },
    {
        header: 'Region',
        body: businessHub?.region ?? "N/A",
      },
      {
        header: 'State',
        body: businessHub?.state ?? "N/A",
      },
      {
        header: 'Contact Person',
        body: businessHub?.contactPerson ?? "N/A",
      }
  ]

  return (
    <CardList items={businessHubs} />
    
  );
}