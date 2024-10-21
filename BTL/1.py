def insert_zero_bits(input_bits):
    count = 0
    output_bits = []
    for bit in input_bits:
        if bit == '1':
            count += 1
        else:
            count = 0
        output_bits.append(bit)
        if count == 5:
            output_bits.append('0')
            count = 0
    return ''.join(output_bits)

# Nhập chuỗi bít từ người dùng
input_bits = input("Enter the bit stream: ")

# Gọi hàm insert_zero_bits
output_bits = insert_zero_bits(input_bits)

print("Output bit stream:", output_bits)

