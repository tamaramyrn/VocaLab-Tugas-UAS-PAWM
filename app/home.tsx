import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, Image, SafeAreaView, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../supabaseClient';

export default function HomeScreen() {
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data: courseData, error: courseError } = await supabase
        .from('courses')
        .select('id, name, description, total_questions, order_number')
        .order('order_number', { ascending: true });

      if (courseError) {
        console.error('Error fetching courses:', courseError);
        throw courseError;
      }

      if (!courseData) {
        throw new Error('No courses found');
      }

      const { data: sectionData, error: sectionError } = await supabase
        .from('section')
        .select('id, name, course_id, slug');

      if (sectionError) {
        console.error('Error fetching sections:', sectionError);
        throw sectionError;
      }

      if (!sectionData) {
        throw new Error('No sections found');
      }

      const groupedCourses = courseData.map((course) => ({
        ...course,
        sections: sectionData.filter((section) => section.course_id === course.id),
      }));

      setCourses(groupedCourses);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleStart = (courseId: number, sectionId: number) => {
    if (courseId === 1 && sectionId === 1) {
      router.push('/question1');
    } else if (courseId === 1 && sectionId === 2) {
      router.push('/question2');
    } else if (courseId === 2 && sectionId === 3) {
      router.push('/question3');
    } else if (courseId === 2 && sectionId === 4) {
      router.push('/question4');
    } else if (courseId === 3 && sectionId === 5) {
      router.push('/question5');
    } else if (courseId === 3 && sectionId === 6) {
      router.push('/question6');
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.centerContainer}>
          <Text style={styles.errorText}>Error: {error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={fetchCourses}>
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>My Courses</Text>
        {courses.length === 0 ? (
          <Text style={styles.noCourses}>No courses available.</Text>
        ) : (
          courses.map((course) => (
            <View key={course.id} style={styles.courseCard}>
              <Text style={styles.courseTitle}>{course.name}</Text>
              <Text style={styles.courseDescription}>{course.description}</Text>

              {course.sections.map((section) => (
                <View key={section.id} style={styles.sectionItem}>
                  <Text style={styles.sectionName}>{section.name}</Text>
                  <TouchableOpacity
                    style={styles.startButton}
                    onPress={() => handleStart(course.id, section.id)}
                  >
                    <Text style={styles.buttonText}>Start now</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: StatusBar.currentHeight, // Add padding to the top
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  courseCard: {
    backgroundColor: '#F9F9F9',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  courseDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 8,
  },
  sectionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  sectionName: {
    fontSize: 16,
    color: '#333',
  },
  startButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#FFFFFF',
  },
  noCourses: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});