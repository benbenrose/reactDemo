# reactDemo
react simple demo
#npm install
#npm run build
#npm run start
��"build": "webpack --display-error-details -p -d",webpack��������-p -d//������
��"start": "webpack-dev-server --port 8686"//����������
Webpack��һ�����ɲ�˵���ŵ㣬�������е��ļ������Ե���ģ�鴦���������JavaScript���룬Ҳ����CSS��fonts�Լ�ͼƬ�ȵȵȣ�ֻ��ͨ�����ʵ�loaders�����Ƕ����Ա�����ģ�鱻����
webpack�ṩ�������ߴ�����ʽ��css-loader �� style-loader�����ߴ��������ͬ��css-loaderʹ���ܹ�ʹ������@import �� url(...)�ķ���ʵ�� require()�Ĺ���,style-loader�����еļ�������ʽ����ҳ���У����������һ��ʹ���ܹ�����ʽ��Ƕ��webpack������JS�ļ��С�

������Ҫע�⣬ this.props.children ��ֵ�����ֿ��ܣ������ǰ���û���ӽڵ㣬������ undefined ;�����һ���ӽڵ㣬���������� object ������ж���ӽڵ㣬�������;��� array �����ԣ����� this.props.children ��ʱ��ҪС�ġ�
������������ڷֳ�����״̬��
Mounting���Ѳ�����ʵ DOM
Updating�����ڱ�������Ⱦ
Unmounting�����Ƴ���ʵ DOM
React Ϊÿ��״̬���ṩ�����ִ�������will �����ڽ���״̬֮ǰ���ã�did �����ڽ���״̬֮����ã�����״̬�������ִ�������

componentWillMount()
componentDidMount()
componentWillUpdate(object nextProps, object nextState)
componentDidUpdate(object prevProps, object prevState)
componentWillUnmount()