import { SafeAreaView } from 'react-native-safe-area-context';
import CarouselComponent from '../src/CarouselComponent';
import { LogBox } from 'react-native';

require('../ReactotronConfig');

export default function Index() {
  LogBox.ignoreAllLogs();
  return <CarouselComponent />;
}
