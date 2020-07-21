import { FitnessWatch } from './index';
import { VehicleType } from './vehicleType';

test('Can calculate average by age', () => {
	const fitnessWatchtest = new FitnessWatch(242342)
 
    expect(() => 
{
	return fitnessWatchtest.getAverage(13124241)
}

    	 ).toReturn();
 
});
