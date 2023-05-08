require 'combine_pdf'

puts Dir.pwd

file_path = "/Users/chrisbell/Desktop/01ChrisBellResume.pdf"
if File.exist?(file_path)
  puts "File exists"
else
  puts "File does not exist"
end

file_path = "/Users/chrisbell/Desktop/01ChrisBellCoverLetter.pdf"
if File.exist?(file_path)
  puts "File exists"
else
  puts "File does not exist"
end



pdf1 = CombinePDF.load('/Users/chrisbell/Desktop/01ChrisBellResume.pdf')
pdf2 = CombinePDF.load('/Users/chrisbell/Desktop/01ChrisBellCoverLetter.pdf')

new_pdf = CombinePDF.new
new_pdf << pdf1
new_pdf << pdf2

new_pdf.save('/Users/chrisbell/Desktop/01ChrisBell.pdf')
