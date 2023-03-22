print("Hello, world!")

a = 1
print(a)
print(type(a)) # type() : 데이터 타입의 자료형을 구함 / a는 정수형 int
b = 1.0
print(b)
print(type(b)) # b는 실수형 float

# 숫자형 사칙연산
a = 3
b = 4
print(a + b) # 7 더하기
print(a * b) # 12 곱하기
print(a / b) # 0.75 나누기
print(a // b) # 0 몫을 구하기
print(a % b) # 3 나머지 구하기
print(a ** b) # 81 제곱

# 문자열 자료형 만들기
print("hello world")
print('hello world')
print("""hello world""")
print('''hello world''')
print('hello\nworld')
print("\'hello world\'")

# 문자열 인덱싱
a = "hello world"
print(a[0]) # 인덱싱의 순서는 0부터 시작
print(a[-1]) # -는 순서가 거꾸로 진행

# 문자열 슬라이싱
a = "hello world"
print(a[0:5])
print(a[:5]) # 시작 인덱싱에 값을 넣지 않으면 처음부터 시작
print(a[6:]) # 종료 인덱싱도 동일한 원리
print(a[::2]) # 2칸 간격으로 해당 문자열 추출하여 출력

# 문자열 포멧팅
a = "I ate %d apples." % 3
print(a)
a = "I ate " + str(3) + " apples."
print(a)
number = 10
day = "three"
a = "I ate %d apples. so I was sick for %s day" % (number, day)
print(a)
b = "I\'m {age} years old" .format(age=24)
print(b)
# python 3.6 버전 이상만 가능한 포멧팅
name = "홍길동"
a = f"나의 이름은 {name}입니다."
print(a)

# 문자열 개수 세기
a = "hello world"
print(a.count("l"))

# 위치 알려주기
a = "hello world"
print(a.find("l"))
print(a.index("l"))

# 문자열 삽입
a = ","
print(a.join('abcd'))

# 소문자를 대문자로 바꾸기
a = "hi"
print(a.upper())

# 대문자를 소문자로 바꾸기
a = "HI"
print(a.lower())

# 양쪽 공백 지우기
a = "   hi   "
print(a.strip())

# 문자열 바꾸기
a = "hello world"
print(a.replace("hello", "hi"))

# 문자열 나누기
a = "life is too short"
print(a.split())
a = "a:b:c:d"
print(a.split(":"))

# list
a = []
print(a)
b = [1, 2, 3]
print(b)
c = ['Life', 'is', 'too', 'short']
print(c)
d = [1, 2, 'life', 'is']
print(d)
e = [1, 2, ['life', 'is']]
print(e)