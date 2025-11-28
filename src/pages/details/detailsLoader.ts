import type { PackageDetails } from '../../api/types/packageDetails'
import { getPackage } from '../../api/queries/getPackage';
import type { Params } from 'react-router-dom';

interface LoaderArgs {
    params: Params;
}

export interface DetailsLoaderResult {
    details: PackageDetails;
}

export async function detailsLoader({ params }: LoaderArgs): Promise<DetailsLoaderResult> {
    //What package are we trying to fetch data for?
    //console.log(props);

    const { name } = params;
    if(!name) {
        throw new Error('Name must be provided')
    }

    // await getPackage(name)
    const details = await getPackage(name);

    return {
        details
    }
}
