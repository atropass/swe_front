.data
	two: .double 2.0
	str_array: .asciiz "Array size: "
	str_dashspaced: .asciiz " - "
	str_result: .asciiz "Result: "
	str_dash: .asciiz "-"
	str_newline: .asciiz "\n"
	str_skobka1: .asciiz "("
	str_skobka2: .asciiz ")"
	str_square1: .asciiz "["
	str_square2: .asciiz "]"
	str_comma: .asciiz ","
	array1: .double 
	array1size: .word 100
	array2: .double 
	array2size: .word 300
	twohundred: .double 200.0
	zero: .double 0.0

.text 
	# main: create_array1, result_1, create_array2, result_2, exit
	create_array1: # create array in the heap of 100 doubles
		lw $a0 array1size
		mul $a0 $a0 8
		li $v0 9
		syscall
		add $s0 $v0 $zero # array 1 address in s0
		add $s1 $a0 $zero # array 1 size in bytes in s1
		add $a1 $a0 $zero # array 1 size in bytes in a1
		add $a0 $s0 $zero # array 1 address in a0
		jal generate_random_numbers
		
		add $a0 $s0 $zero # array 1 address in a0
		div $a1 $s1 8 #array 1 size in a1
		jal print_array
	
	result_1: # array 1 address in s0 | array 1 size in bytes in s1
		la $a0 str_newline
		jal print_str	# new line
		
		la $a0 str_result
		jal print_str
		
		lw $a0 array1size
		mul $a0 $a0 4
		li $v0 9
		syscall
		add $s2 $v0 $zero # save address of indexes in s2
		add $s6 $s2 $zero
		add $a0 $s0 $zero # array 1 address in a0
		lw $a1 array1size #array 1 size in a1
		add $a2 $s2 $zero
		
		jal find_all_pairs # returns: number of pairs in $v1
		
		add $a0 $v1 $zero
		li $v0 1
		syscall
		
		la $a0 str_newline
		jal print_str	# new line
		
		add $a1 $v1 $zero
		add $a0 $s6 $zero
		add $a2 $s0 $zero
		jal print_pairs
	
	la $a0 str_newline
	jal print_str	# new line
	la $a0 str_newline
	jal print_str	# new line
		
	create_array2: # create array in the heap of 300 doubles
		lw $a0 array2size
		mul $a0 $a0 8
		li $v0 9
		syscall
		add $s0 $v0 $zero # array 1 address in s0
		add $s1 $a0 $zero # array 1 size in bytes in s1
		add $a1 $a0 $zero # array 1 size in bytes in a1
		add $a0 $s0 $zero # array 1 address in a0
		jal generate_random_numbers
		
		add $a0 $s0 $zero # array 1 address in a0
		div $a1 $s1 8 #array 1 size in a1
		jal print_array
	
	result_2: # array 2 address in s0 | array 1 size in bytes in s1
		la $a0 str_newline
		jal print_str	# new line
		
		la $a0 str_result
		jal print_str
		
		lw $a0 array2size
		mul $a0 $a0 4
		li $v0 9
		syscall
		add $s2 $v0 $zero # save address of indexes in s2
		add $s6 $s2 $zero
		add $a0 $s0 $zero # array 1 address in a0
		lw $a1 array2size #array 1 size in a1
		add $a2 $s2 $zero
		
		jal find_all_pairs # returns: number of pairs in $v1
		
		add $a0 $v1 $zero
		li $v0 1
		syscall
		
		la $a0 str_newline
		jal print_str	# new line
		
		add $a1 $v1 $zero
		add $a0 $s6 $zero
		add $a2 $s0 $zero
		jal print_pairs	
	exit:
		li $v0 10
		syscall
	# functions: print_array, printStr, generate_random_numbers, print_pairs, xAnd2x, find_all_pairs
	print_pairs: # a0 - address of index array | a1 number of pairs | a2 address of og array
		add $sp $sp -32
		#add $t0 $ra $zero
		sw $ra ($sp)
		sw $s0 4($sp)
		sw $s1 8($sp)
		sw $s2 12($sp)
		sw $s3 16($sp)
		sw $s4 20($sp)
		sw $s7 24($sp)
		sw $s5 28($sp)
		
		add $s0 $a0 $zero
		add $s1 $a1 $zero
		add $s2 $a2 $zero
		add $s3 $zero $zero
		add $s7 $zero $zero
		add $s5 $zero $zero
		# a0 - address of index array | a1 number of pairs | a2 address of og array
		pair:
			la $a0 str_skobka1
			jal print_str
			lw $s4 ($s0)
			mul $s5 $s4 8
			add $s5 $s2 $s5
			l.d $f12 ($s5)
			li $v0 3
			syscall
			
			la $a0 str_square1
			jal print_str
			
			add $a0 $s4 $zero
			li $v0 1
			syscall
			
			la $a0 str_square2
			jal print_str
			
			la $a0 str_comma
			jal print_str
			
			addi $s0 $s0 4 # increment array
			
			lw $s4 ($s0)
			mul $s5 $s4 8
			add $s5 $s2 $s5
			l.d $f12 ($s5)
			li $v0 3
			syscall
			
			la $a0 str_square1
			jal print_str
			
			add $a0 $s4 $zero
			li $v0 1
			syscall
			
			la $a0 str_square2
			jal print_str
			
			addi $s0 $s0 4
			
			la $a0 str_skobka2
			jal print_str
			
			add $s7 $s7 1
			add $s3 $s3 1
			beq $s7 $s1 end
			continue:
				blt $s3 5 pair
		
		add $s3 $zero $zero
		la $a0 str_newline
		jal print_str	# new line
		
		blt $s7 $s1 pair
		
		end:
		lw $ra ($sp)
		lw $s0 4($sp)
		lw $s1 8($sp)
		lw $s2 12($sp)
		lw $s3 16($sp)
		lw $s4 20($sp)
		lw $s7 24($sp)
		lw $s5 28($sp)
		add $sp $sp 32
		#add $ra $t0 $zero
		jr $ra
	find_all_pairs: # a0 - address of array; a1 - size of array (100/300); a2 - address of array of ints
		#add $t0 $ra $zero
		add $sp $sp -32
		sw $ra ($sp)
		#sw $s0 4($sp)
		sw $s1 8($sp)
		sw $s2 12($sp)
		sw $s3 16($sp)
		sw $s4 20($sp)
		sw $s7 24($sp)
		sw $s5 28($sp)
		
		add $s0 $a0 $zero
		add $s1 $a1 $zero
		add $s2 $a2 $zero
		add $s3 $zero $zero
		add $s4 $zero $zero
		add $s5 $zero $zero
		add $s7 $a0 $zero
		loop:
			#address of array is in a0 size a1
			add $a2 $s4 $zero
			mul $s4 $s4 8
			add $a0 $s0 $s4
			add $a1 $s1 $zero
			jal xAnd2x
			beq $v0 -1 comeback
			addi $s5 $s5 1
			add $s3 $v1 $zero # 2x
			sw $s3 ($s2)
			addi $s2 $s2 4
			add $s3 $v0 $zero # x
			sw $s3 ($s2)
			addi $s2 $s2 4
			add $s4 $v0 $zero # x index
			addi $s4 $s4 1 # x++
			bne $s4 $s1 loop
		
		comeback:
			add $v1 $s5 $zero # number of pairs
			lw $ra ($sp)
			#lw $s0 4($sp)
			lw $s1 8($sp)
			lw $s2 12($sp)
			lw $s3 16($sp)
			lw $s4 20($sp)
			lw $s7 24($sp)
			lw $s5 28($sp)
			add $sp $sp 32
			#add $ra $t0 $zero
			jr $ra
	print_str:
		li $v0 4
		syscall
		jr $ra
	print_array: # a0 - address of array; a1 - size of array
		add $sp $sp -24
		sw $ra ($sp)
		sw $s0 4($sp)
		sw $s1 8($sp)
		sw $s2 12($sp)
		sw $s3 16($sp) # column counter
		sw $s4 20($sp)
		
		add $s0 $a0 $zero # array address
		add $s1 $a1 $zero # array size in bytes
		
		addi $s2 $zero 1 # to print rows
		div $s3 $s1 10
		addi $s4 $s3 1 # 11
		la $a0 str_array
		jal print_str	# Array size:
		
		add $a0 $s1 $zero # array size int
		li $v0 1
		syscall
		
		printingrows:
			la $a0 str_newline
			jal print_str	# new line
			li $s3 10
			add $a0 $s2 $zero
			li $v0 1
			syscall
			
			la $a0 str_dashspaced
			jal print_str
			
			printingvalues:
				beq $s3 10 printvalueonly
				la $a0 str_dash
				jal print_str
				printvalueonly:
				l.d $f12 ($s0)
				li $v0 3
				syscall
				addi $s3 $s3 -1
				addi $s0 $s0 8
				bne $s3 $zero printingvalues
				
			addi $s2 $s2 1
			bne $s2 $s4 printingrows
		
		lw $ra ($sp)
		lw $s0 4($sp)
		lw $s1 8($sp)
		lw $s2 12($sp)
		lw $s3 16($sp)
		lw $s4 20($sp)
		add $sp $sp 24
		jr $ra
		
	generate_random_numbers: # array address in a0 | array size in a1
		andi $sp 0xfffffff8
		addi $sp $sp -24
		s.d $f20 0($sp)
		sw $s0 8($sp)
		sw $s1 12($sp)
		sw $ra 16($sp)
		add $s0 $a0 $zero # iterable array address
		add $s1 $a1 $zero # array size
		l.d $f20 twohundred
		
		fill_array:
			li $a0 8
			li $v0 44
			syscall
			
			mul.d $f0 $f0 $f20
			round.w.d $f0 $f0
			cvt.d.w $f0 $f0
			
			s.d $f0 ($s0)
			addi $s0 $s0 8
			addi $s1 $s1 -1
			bne $s1 $zero fill_array
		
		l.d $f20 0($sp)
		lw $s0 8($sp)
		lw $s1 12($sp)
		lw $ra 16($sp)
		addi $sp $sp 24
		jr $ra

	xAnd2x: #address of array is in a0 -> s0, size a1 -> s1, starting index a2 -> s4
		andi $sp 0xfffffff8
		add $sp $sp -64
		s.d $f20 ($sp) # to check 2x
		s.d $f22 8($sp) # temp double
		s.d $f24 16($sp) # double two
		sw $ra 24($sp)
		sw $s0 28($sp)
		sw $s1 32($sp)
		sw $s2 36($sp) # it i
		sw $s3 40($sp) # it j
		sw $s4 44($sp) #index i
		sw $s5 48($sp) #index j
		
		add $s0 $a0 $zero
		add $s1 $a1 $zero
		
		add $s2 $s0 $zero
		add $s3 $s7 $zero
		
		add $s4 $zero $zero
		add $s5 $a2 $zero
		ldc1 $f24 two
		
		iloop:
			l.d $f20 ($s2)
			mul.d $f20 $f20 $f24
			jloop:
				beq $s4 $s5 increment
				l.d $f22 ($s3)
				c.eq.d $f22 $f20
				bc1t success
				increment:
				addi $s3 $s3 8
				addi $s4 $s4 1
				bne $s4 $s1 jloop
			
			add $s4 $zero $zero # j = 0
			add $s3 $s7 $zero # address j = array[0]
			addi $s2 $s2 8 # address++
			addi $s5 $s5 1 #i++
			bne $s5 $s1 iloop
			
		l.d $f20 0($sp) # to check 2x
		l.d $f22 8($sp) # temp double
		l.d $f24 16($sp) # double two		
		lw $ra 24($sp)
		lw $s0 28($sp)
		lw $s1 32($sp)
		lw $s2 36($sp) # it i
		lw $s3 40($sp) # it j
		lw $s4 44($sp) #index i
		lw $s5 48($sp) #index j
		add $sp $sp 64
		li $v0 -1
		jr $ra
		
		success:
			add $v1 $s4 $zero #2x index
			add $v0 $s5 $zero #x index
			l.d $f20 ($sp) # to check 2x
			l.d $f22 8($sp) # temp double
			l.d $f24 16($sp) # double two
			lw $ra 24($sp)
			lw $s0 28($sp)
			lw $s1 32($sp)
			lw $s2 36($sp) # it i
			lw $s3 40($sp) # it j
			lw $s4 44($sp) #index i
			lw $s5 48($sp) #index j
			add $sp $sp 64
			jr $ra
