def count_vowels(words)
  vowels = 0
  for char in words.chars
    if char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'
      vowels += 1
    end
  end
  return vowels
end 

puts count_vowels("hello world") 
