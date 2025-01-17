import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Modal, SafeAreaView, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

export default function Question3() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const question = {
    content: 'The scientist worked tirelessly to ____________ the mystery behind the strange phenomenon.',
    options: ['Create', 'Solve'],
    correct_answer: 'Solve',
    meaning: 'Meaning : To find an explanation or answer to something that is difficult to understand.'
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === question.correct_answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowResult(true);
    setIsModalVisible(true);
  };

  const handleContinue = () => {
    if (isCorrect) {
      router.push('/home'); 
    } else {
      setIsModalVisible(false); 
      setShowResult(false); 
      setSelectedOption(null); 
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text>Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Vocabulary 1</Text>
        </View>
        <View style={styles.questionContainer}>
          <Image source={require('../assets/images/vocabulary-1.png')} style={styles.questionImage} />
          <Text style={styles.questionContent}>{question.content}</Text>

          <Text style={styles.meaningText}>{question.meaning}</Text>

          <View style={styles.options}>
            {question.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  selectedOption === option && styles.selectedOptionButton,
                ]}
                onPress={() => handleOptionSelect(option)}
              >
                <Text
                  style={[
                    styles.optionButtonText,
                    selectedOption === option && styles.selectedOptionButtonText,
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={styles.checkButton} onPress={handleCheckAnswer}>
            <Text style={styles.checkButtonText}>Check Answer</Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.resultText}>
                {isCorrect ? 'Correct!' : 'Wrong Answer!'}
              </Text>
              {isCorrect && (
                <Text style={styles.explanationText}>
                  While "create" could fit the sentence grammatically, 
                  the meaning of "solve" aligns with uncovering a mystery, making it the correct choice.
                </Text>
              )}
              <TouchableOpacity
                style={styles.continueButton}
                onPress={handleContinue}
              >
                <Text style={styles.continueButtonText}>
                  {isCorrect ? 'Continue' : 'Try Again'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backButton: {
    padding: 8,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007AFF',
  },
  questionContainer: {
    marginTop: 24,
  },
  questionImage: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 16,
    resizeMode: 'contain',
  },
  questionContent: {
    fontSize: 16,
    lineHeight: 24,
    color: '#131313',
    marginBottom: 16,
  },
  meaningText: {
    fontSize: 14,
    color: '#555555',
    fontStyle: 'italic',
    marginBottom: 16,
    textAlign: 'center',
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  optionButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#E6F2FF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#007AFF',
    marginBottom: 8,
  },
  selectedOptionButton: {
    backgroundColor: '#007AFF',
  },
  optionButtonText: {
    fontSize: 14,
    color: '#007AFF',
  },
  selectedOptionButtonText: {
    color: '#FFFFFF',
  },
  checkButton: {
    paddingVertical: 12,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  checkButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  resultText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007AFF',
    marginBottom: 12,
    textAlign: 'center',
  },
  explanationText: {
    fontSize: 14,
    color: '#131313',
    textAlign: 'center',
    marginBottom: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    width: '80%',
  },
  continueButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  continueButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});