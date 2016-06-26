print "Integer please: "
user_num = Integer(gets.chomp)

if user_num < 0
  puts "You picked a negative integer!"
elsif user_num > 0
  puts "You picked a positive integer!"
else
  puts "You picked zero!"
end

if 1 < 2
  print "I'm getting printed because one is less than two!"
end

hungry = false

unless hungry
  puts "I'm writing Ruby programs!"
else
  puts "Time to eat!"
end

is_true = 2 != 3

is_false = 2 == 3

test_1 = 17 >= 16

test_2 = 21 <= 30

test_3 = 9 >= 9

test_4 = -11 < 4
