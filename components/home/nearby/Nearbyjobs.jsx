import { useRouter } from 'expo-router';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import useFetch from '../../../hooks/useFetch';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

import { COLORS, SIZES } from '../../../constants';
import styles from './nearbyjobs.style';

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch('search', {
    query: 'React Native developer',
    num_pages: '1',
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <NearbyJobCard
                job={item}
                // key={`nearby-job-${job.job_id}`}
                handleNavigate={() =>
                  router.push(`/job-details/${item.job_id}`)
                }
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            // horizontal
          />
          // data?.map((job) => (
          //   <NearbyJobCard
          //     job={job}
          //     key={`nearby-job-${job.job_id}`}
          //     handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
          //   />
          // ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
