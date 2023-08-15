from rest_framework import serializers

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("id", "title", "description", "done")